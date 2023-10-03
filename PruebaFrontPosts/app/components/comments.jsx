"use client"
import { Card, CardHeader, CardBody } from "@nextui-org/card";

export default function CommentsPost({ comments, postId }) {
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {comments?.map((c) => {
                if (c.postId == postId) {
                    return (
                        <Card className="max-w-[340px] mb-5 p-4" key={c.id}>
                            <CardHeader className="justify-between">
                                <div className="flex gap-5">
                                    <div className="flex flex-col gap-1 items-start justify-center">
                                        <h4 className="text-small font-semibold leading-none text-white-600">{c.name}</h4>
                                        <h5 className="text-small tracking-tight text-default-400">{c.email}</h5>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardBody className="px-3 py-0 text-small text-white-400">
                                <p>
                                    {c.body}
                                </p>
                            </CardBody>
                        </Card>
                    )
                }
            })}
        </ul>
    )
}

