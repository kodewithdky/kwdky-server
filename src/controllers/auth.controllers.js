import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { StatusCodes } from "http-status-codes";

const test = asyncHandler((req, res) => {
   let bool = true;
   if (!bool) {
      throw new ApiError(StatusCodes.BAD_REQUEST, "bool is required");
   }
   res.status(StatusCodes.OK).json(
      new ApiResponse(StatusCodes.OK, {}, "response send successfully!")
   );
});

export { test };
