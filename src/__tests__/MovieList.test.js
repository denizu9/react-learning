import { render, waitFor, screen } from "@testing-library/react";
import getMoviesAPI from "../api/GetMoviesAPI";
import MovieList from "../components/Home/MovieList";

jest.mock("../api/GetMoviesAPI", () => {
  return {
    __esModule: true,
    default: jest.fn(),
  };
});

describe("MovieList", () => {
  it("fetches movies and displays them", async () => {
    const movies = [
      {
        id: 1,
        title: "Movie 1",
        genre: "Action",
        year: 2020,
        mainCharacterName: "DEneme",
        description: "A thrilling action movie.", // Unique description
      },
    ];

    // Mock the constructor and its method
    getMoviesAPI.mockImplementation(() => {
      return {
        getMovies: jest.fn().mockResolvedValue({ data: movies }),
      };
    });

    render(<MovieList />);

    // Wait for the movie title to appear
    await waitFor(() => {
      expect(screen.getByText("Movie 1")).toBeInTheDocument();
    });

    expect(screen.getByText("Action")).toBeInTheDocument();
    expect(screen.getByText("2020")).toBeInTheDocument();
    expect(screen.getByText("DEneme")).toBeInTheDocument();
    expect(screen.getByText("A thrilling action movie.")).toBeInTheDocument(); // Use the unique description
  });
});
