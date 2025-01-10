import { render, screen, fireEvent } from "@testing-library/react";
import CharactersPagination from "../pagination";
import { useRouter } from "next/navigation";

// Mock the useRouter hook
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("CharactersPagination", () => {
  it("renders Pagination component with the correct current page and total pages", async () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });

    const totalPages = 5;
    const currentPage = 2;

    render(CharactersPagination({ page: currentPage, totalPages: totalPages }));

    expect(screen.getByText("Next")).toBeInTheDocument();
    expect(screen.getByText("Prev")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("calls router.push with the correct page number when a new page is selected", () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });

    const totalPages = 5;
    const currentPage = 2;

    render(<CharactersPagination page={currentPage} totalPages={totalPages} />);

    const nextButton = screen.getByText("Next");
    fireEvent.click(nextButton);

    expect(mockPush).toHaveBeenCalledWith("/characters/?page=3");
  });

  it("does not call router.push when the current page is the last page", () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });

    const totalPages = 5;
    const currentPage = 5;

    render(<CharactersPagination page={currentPage} totalPages={totalPages} />);

    const nextButton = screen.getByText("Next");
    fireEvent.click(nextButton);

    expect(mockPush).not.toHaveBeenCalled();
  });
});
