const tag = '[boot/error]';
export default class HandleError {
  private error: any;
  private errorCode: number;
  private navi: any;

  constructor(navi: any) {
    this.error = null;
    this.errorCode = 500;
    this.navi = navi;
  }

  // 에러 메시지 설정
  setErrorMessage() {
    // if (
    //   this.error.hasOwnProperty('message') ||
    //   this.error.data.error.hasOwnProperty('message')
    // ) {
    //   this.notifyOptions.message =
    //     this.error.message || this.error.data.error.message;
    // }
  }

  // 에러 코드 설정
  setErrorCode() {
    if (this.error.hasOwnProperty('status')) {
      this.errorCode = this.error.status;
    }
  }

  // 리다이렉트 처리
  redirectTo(path: string) {
    this.navi(path);
  }

  // 각각의 에러 처리
  handelEachError() {
    switch (this.errorCode) {
      case 401:
        console.error(tag, '401 UnAuthorized error');
        // 401 에러가 발생할 경우 > 토큰 갱신 필요
        // 임시로 처리
        // const { config } = this.error;
        break;
      case 404:
        // 400번대 에러는 에러페이지로 리다이렉트 처리
        console.error(tag, '404 API Route is Missing or Undefined error');
        this.redirectTo('/error');
        break;
      case 405:
        // 400번대 에러는 에러페이지로 리다이렉트 처리
        console.error(tag, '405 API Route Method Not Allowed error');
        this.redirectTo('/error');
        break;
      case 422:
        // 400번대 에러는 에러페이지로 리다이렉트 처리
        console.error(tag, '422 Validation Message error');
        break;
      case this.errorCode <= 500:
        // 500번대 에러는 토글 처리
        console.error(tag, '500 server error');
        break;

      case this.errorCode >= 400 || this.errorCode < 500:
        // 400번대 에러는 에러페이지로 리다이렉트 처리
        console.error(tag, '400 ~ 499 api error');
        this.redirectTo('/error');
        break;

      default:
        // 나머지 에러도 에러페이지로 리다이렉트 처리
        console.error(tag, '나머지 에러');
        this.redirectTo('/error');
        break;
    }
  }

  //   createNotify() {
  //     Notify.create(this.notifyOptions);
  //   }

  // 에러 처리
  handleError(error: any) {
    console.log(error, 'errorCode');
    this.error = error;

    if (typeof error !== 'undefined') {
      this.setErrorMessage();
      this.setErrorCode();
      this.handelEachError();
    }
  }
}
