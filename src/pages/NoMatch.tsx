import { Link } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
export const NoMatch = () => {
  return (
    <>
      <div className="navbar-spacer invisible py-10 lg:py-20">
        navbar plachoder
      </div>
      <section className="bg-white dark:bg-gray-900 ">
        <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
          <div className="flex flex-col items-center max-w-sm mx-auto text-center">
            <p className="p-3 text-sm font-medium text-blue-500 rounded-full bg-blue-50 dark:bg-gray-800">
              <ErrorOutlineIcon />
            </p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              Page not found
            </h1>
            <p className="mt-4 ">The page you are looking for doesn't exist.</p>

            <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
              <button className="w-1/2 px-5 py-2 text-sm tracking-wide text-white  hover:text-secondary hover:bg-white transition-colors duration-200 bg-secondary rounded-lg shrink-0 sm:w-auto ">
                <Link to={"/"}> Take me home</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
