"use client"
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/button";

export default function NavigationBar() {
    return (
        <Navbar isBordered>
            <NavbarBrand>
                <Link href="/" className="flex items-center">
                    <Image alt="logo" src="/logo.png" width="50" height="25" />
                    <Image alt="logo" src="/icon.png" width="200" height="60" className="ml-3"/>
                </Link>
            </NavbarBrand>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Button color="primary" variant="solid">
                        <Link href="#">Login</Link>
                    </Button>
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">
                    <Button color="primary" variant="solid">
                        <Link href="#">SignUp</Link>
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
