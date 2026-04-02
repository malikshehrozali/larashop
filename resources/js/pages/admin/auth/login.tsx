// resources/js/Pages/Admin/Auth/Login.tsx

import Heading from '@/components/heading';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

interface LoginForm {
    email: string;
    password: string;
    remember: boolean;
}

export default function Login() {
    const { data, setData, post, processing, errors } = useForm<LoginForm>({
        email: '',
        password: '',
        remember: false,
    });

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('admin.login.submit'));
    };

    return (
        <>
            <Head title="Admin Login" />
            <div className="flex h-screen w-full flex-col items-center justify-center">
                <Heading title="Admin Login" description="Enter your credentials to access the admin dashboard." />
                <form className="flex w-full flex-col gap-6 px-4 lg:w-[40vw]" onSubmit={handleSubmit}>
                    <div className="grid gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email address</Label>
                            <Input
                                id="email"
                                type="email"
                                required
                                autoFocus
                                tabIndex={1}
                                autoComplete="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                placeholder="email@example.com"
                            />
                            <InputError message={errors.email} />
                        </div>

                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                            </div>
                            <Input
                                id="password"
                                type="password"
                                required
                                tabIndex={2}
                                autoComplete="current-password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                placeholder="Password"
                            />
                            <InputError message={errors.password} />
                        </div>

                        <Button type="submit" className="mt-4 w-full" tabIndex={4} disabled={processing}>
                            {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                            Log in
                        </Button>
                    </div>

                    <div className="text-muted-foreground text-center text-sm">
                        Don't have an account?{' '}
                        <TextLink href={route('register')} tabIndex={5}>
                            Sign up
                        </TextLink>
                    </div>
                </form>
            </div>
        </>
    );
}
