<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    protected $fillable = [
        'name',
        'email',
        'password',
        'role_id',
        'is_super_admin',
        'is_active',
        'last_login_at',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts():array{
        return [
            'password' => 'hashed',
            'is_super_admin' => 'boolean',
            'is_active' => 'boolean',
            'last_login_at' => 'datetime',
        ];
    }    
    
    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    // checking for the super admin and other admins permissions
    public function hasPermission($permissionName): bool
    {
        if ($this->is_super_admin) {
            return true; // Super admin has all permissions
        }
        if(!$this->role) {
            return false; // No role assigned, so no permissions
        }
        return $this->role && $this->role->permissions()->where('name', $permissionName)->exists();
    }
    // checking for the multiple permissions at once
    public function hasAllPermissions(array $permissions): bool
    {
        foreach ($permissions as $permission) {
            if (! $this->hasPermission($permission)) {
                return false;
            }
        }
        return true;
    }

    /**
     * Check if admin has any one of the given permissions.
     */
    public function hasAnyPermission(array $permissions): bool
    {
        foreach ($permissions as $permission) {
            if ($this->hasPermission($permission)) {
                return true;
            }
        }
        return false;
    }
}
