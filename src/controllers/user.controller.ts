import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { cookieNames } from '../utils/constants';

class userRepository {
  /**
   * @requst Mobile Number
   * @response Mobile Number via cookies
   */
  public addCookiesAndPhoneNumber(request: Request, response: Response) {
    const { phone } = request.body;
    if (!phone) {
      return response
        .status(StatusCodes.BAD_REQUEST)
        .send('Please Enter Phone Number');
    }
    return response.cookie(cookieNames.MOBILE_INTO_COOKIES, phone, {
      httpOnly: true,
      signed: true,
      secure: true,
      sameSite: 'none',
    });
  }
}

const userController: userRepository = new userRepository();

export { userController };
