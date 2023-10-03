"use client"
import { Button } from "@nextui-org/button";

export default function Pagination({ allPosts, postPerPage=20, pagination, currentPage }) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(allPosts.length / postPerPage); i++) {
        pageNumbers.push(i)
    }

    const handlePreviousPage = (e) => {
        e.preventDefault();
        if (currentPage - 1 > 0) {
            return pagination(currentPage - 1)
        } else {
            return pagination(currentPage)
        }
    }
    const handleNextPage = (e) => {
        e.preventDefault();
        if (currentPage + 1 <= (Math.ceil(allPosts.length / postPerPage))) {
            return pagination(currentPage + 1)
        } else {
            return pagination(currentPage)
        }
    }

    return (
        <nav>
            <ul className="w-70vw mx-auto flex justify-center mt-10">
                {pageNumbers && <>
                    <Button color="primary" variant="solid" onClick={(e) => handlePreviousPage(e)} alt="previou page"> &lt; </Button>
                    <li className="pr-7 pl-7 text-3xl">{currentPage}</li>
                    <Button color="primary" variant="solid" onClick={(e) => handleNextPage(e)} alt="next page"> &gt; </Button>
                </>}
            </ul>
        </nav>
    )
}