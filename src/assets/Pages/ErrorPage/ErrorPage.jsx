import { Link, useRouteError } from "react-router-dom";
import IconFaceIdError from "./ErrorSvg";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <div className='flex flex-col justify-center items-center min-h-screen'>
        <IconFaceIdError className='text-5xl'></IconFaceIdError>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className='mb-5'>
          <span className='pr-1 italic'>{error.status}</span>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to='/'>
          <button className='px-3 py-1 bg-amber-500 rounded-md'>Go Back</button>
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
