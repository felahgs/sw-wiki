import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "@/components/Pagination";
import Button from "@/components/Button";

describe("Pagination Component", () => {
  const mockOnPageChange = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should render Pagination with correct buttons and page numbers", () => {
    render(
      <Pagination
        currentPage={3}
        totalPages={5}
        onPageChange={mockOnPageChange}
      />
    );

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();

    expect(screen.getByLabelText("Go to previous page")).toBeEnabled();
    expect(screen.getByLabelText("Go to next page")).toBeEnabled();
  });

  test("should not render if total page is 0", () => {
    render(
      <Pagination
        currentPage={3}
        totalPages={0}
        onPageChange={mockOnPageChange}
      />
    );

    expect(screen.queryByText("1")).not.toBeInTheDocument();

    expect(
      screen.queryByLabelText("Go to previous page")
    ).not.toBeInTheDocument();
    expect(screen.queryByLabelText("Go to next page")).not.toBeInTheDocument();
  });

  test("should render pagination correctly when totalPages <= 5 (line 24)", () => {
    render(
      <Pagination
        currentPage={2}
        totalPages={3}
        onPageChange={mockOnPageChange}
      />
    );

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();

    expect(screen.getByLabelText("Go to previous page")).toBeEnabled();
    expect(screen.getByLabelText("Go to next page")).toBeEnabled();
  });

  test("should render pagination correctly when currentPage <= 3 (line 42)", () => {
    render(
      <Pagination
        currentPage={2}
        totalPages={6}
        onPageChange={mockOnPageChange}
      />
    );

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("...")).toBeInTheDocument();
    expect(screen.getByText("6")).toBeInTheDocument();
  });

  test("calls onPageChange when page number is clicked", () => {
    render(
      <Pagination
        currentPage={3}
        totalPages={5}
        onPageChange={mockOnPageChange}
      />
    );

    const page3Button = screen.getByText("3");
    fireEvent.click(page3Button);

    expect(mockOnPageChange).toHaveBeenCalledWith(3);
  });

  test("does not call onPageChange when disabled Prev or Next button is clicked", () => {
    render(
      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={mockOnPageChange}
      />
    );

    const prevButton = screen.getByLabelText("Go to previous page");
    fireEvent.click(prevButton);

    expect(mockOnPageChange).not.toHaveBeenCalled();
  });

  test("disables Prev button on the first page", () => {
    render(
      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={mockOnPageChange}
      />
    );

    const prevButton = screen.getByLabelText("Go to previous page");
    expect(prevButton).toBeDisabled();
  });

  test("disables Next button on the last page", () => {
    render(
      <Pagination
        currentPage={5}
        totalPages={5}
        onPageChange={mockOnPageChange}
      />
    );

    const nextButton = screen.getByLabelText("Go to next page");
    expect(nextButton).toBeDisabled();
  });

  test("should render ellipsis and pages correctly when there are more than 5 pages", () => {
    render(
      <Pagination
        currentPage={6}
        totalPages={10}
        onPageChange={mockOnPageChange}
      />
    );

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.queryAllByText("...")).toHaveLength(2);
    expect(screen.getByText("6")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
  });

  test("calls onPageChange when Next button is clicked (line 73)", () => {
    render(
      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={mockOnPageChange}
      />
    );

    const nextButton = screen.getByLabelText("Go to next page");
    fireEvent.click(nextButton);

    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  test("does not call onPageChange when Next button is disabled (on last page)", () => {
    render(
      <Pagination
        currentPage={5}
        totalPages={5}
        onPageChange={mockOnPageChange}
      />
    );

    const nextButton = screen.getByLabelText("Go to next page");
    fireEvent.click(nextButton);

    expect(mockOnPageChange).not.toHaveBeenCalled();
  });

  test("does not call onPageChange when Next button is disabled (on last page)", () => {
    render(
      <Pagination
        currentPage={5}
        totalPages={5}
        onPageChange={mockOnPageChange}
      />
    );

    const nextButton = screen.getByLabelText("Go to next page");
    fireEvent.click(nextButton);

    expect(mockOnPageChange).not.toHaveBeenCalled();
  });

  test("should render pagination correctly when currentPage is the second to last page", () => {
    render(
      <Pagination
        currentPage={9}
        totalPages={10}
        onPageChange={mockOnPageChange}
      />
    );

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("...")).toBeInTheDocument();
    expect(screen.getByText("9")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
  });

  test("Prev button is enabled and triggers onPageChange when not on the first page", () => {
    render(
      <Pagination
        currentPage={2}
        totalPages={5}
        onPageChange={mockOnPageChange}
      />
    );

    const prevButton = screen.getByLabelText("Go to previous page");
    expect(prevButton).toBeEnabled();
    fireEvent.click(prevButton);
    expect(mockOnPageChange).toHaveBeenCalledWith(1);
  });
});
