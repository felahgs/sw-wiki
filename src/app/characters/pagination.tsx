"use client";

import Pagination from "@/components/Pagination";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";

interface CharacterPaginationProps {
  totalPages: number;
  page: string | number;
}

function CharactersPagination({ page, totalPages }: CharacterPaginationProps) {
  const router = useRouter();

  function handlePageChange(page: string | number) {
    router.push(`/characters/?page=${page}`);
  }

  return (
    <Pagination
      currentPage={+page}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
  );
}

export default CharactersPagination;
