<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // ── 1. roles (no dependencies) ──────────────────────────
        Schema::create('roles', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100)->unique();           // e.g. catalog_manager
            $table->string('display_name', 150)->nullable(); // e.g. "Catalog Manager"
            $table->string('description')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        // ── 2. permissions (no dependencies) ────────────────────
        Schema::create('permissions', function (Blueprint $table) {
            $table->id();
            $table->string('name', 150)->unique();           // e.g. products.create
            $table->string('display_name', 150)->nullable(); // e.g. "Create Products"
            $table->string('group', 100)->nullable();        // e.g. products, orders
            $table->timestamps();
        });

        // ── 3. role_permissions pivot (needs roles + permissions) 
        Schema::create('role_permissions', function (Blueprint $table) {
            $table->foreignId('role_id')
                  ->constrained('roles')
                  ->cascadeOnDelete();
            $table->foreignId('permission_id')
                  ->constrained('permissions')
                  ->cascadeOnDelete();
            $table->primary(['role_id', 'permission_id']);
        });

        // ── 4. admins (needs roles) ──────────────────────────────
        Schema::create('admins', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->foreignId('role_id')
                  ->nullable()                    // nullable so super admin needs no role
                  ->constrained('roles')
                  ->nullOnDelete();               // if role deleted, don't lose the admin
            $table->boolean('is_super_admin')->default(false);
            $table->boolean('is_active')->default(true);
            $table->timestamp('last_login_at')->nullable();
            $table->string('remember_token', 100)->nullable(); // BUG FIX: must be nullable
            $table->timestamps();
        });
    }

    public function down(): void
    {
        // Drop in REVERSE order of creation (foreign keys must be released first)
        Schema::dropIfExists('admins');
        Schema::dropIfExists('role_permissions');
        Schema::dropIfExists('permissions');
        Schema::dropIfExists('roles');
    }
};