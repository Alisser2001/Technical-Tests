"use client"
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from '@nextui-org/button';

export default function Post({ postId, user, postTitle, postBody, comments, widthCard }) {
    return (
        <Card className={`max-w-[${widthCard}px] mb-5 p-4`} key={postId}>
            <CardHeader className="justify-between">
                <div className="flex gap-5">
                    <Image alt="userProfile" src={postId === "mypost" ? "/profile.png" : "/user-circle.png"} width="50" height="25" className={postId === "mypost" && "rounded-full"}/>
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-small font-semibold leading-none text-white-600">{user[0].name}</h4>
                        <h5 className="text-small tracking-tight text-default-400">@{user[0].username}</h5>
                    </div>
                </div>
                <Button radius="full" color="primary" variant="solid" className="hidden lg:flex">
                    Follow
                </Button>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-white-400">
                <h2>{postTitle}</h2>
                <p>
                    {postBody}
                </p>
                <span className="pt-2 text-blue-500">
                    #FrontendWithAlisser
                    <span className="py-2" aria-label="computer" role="img">
                        💻
                    </span>
                </span>
            </CardBody>
            <CardFooter className="gap-3">
                <div className="flex gap-1 hidden lg:flex">
                    <p className="font-semibold text-blue-500 text-small text-blue">4</p>
                    <p className="text-default-400 text-small">Following</p>
                </div>
                <div className="flex gap-1">
                    <p className="font-semibold text-blue-500 text-small text-blue">97.1K</p>
                    <p className="text-default-400 text-small">Followers</p>
                </div>
                <div className="flex gap-1">
                    <p className="font-semibold text-blue-500 text-small">{comments}</p>
                    <Link href={`/comments/${postId}`} className="text-default-400 text-small">Comments</Link>
                </div>
            </CardFooter>
        </Card>
    );
}


