import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "home": "Home",
      "contact":"Contact",
      "about":"About",
      "signup":"SignUp",
      "title": "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!",
      "shopnow":"ShopNow",
      "create account":"Create an account",
      "info":"Enter your details below",
      "name":"Name",
      "Email or Phone Number":"Email or Phone Number",
      "Password": "Password",
      "Create Account": "Create Account",
      "google":"Sign up with Google",
      "Already": "Already have account?",
      "login": "Log in",
      'inputsearch':"What are you looking for?"
    }
  },
  vi: {
    translation: {
      "home": "Trang Chủ",
      "contact": "Liên Hệ",
      "about": "Xem Thêm",
      "signup": "Đăng Kí",
      "title":"Giảm giá mùa hè cho tất cả các bộ đồ bơi và chuyển phát nhanh miễn phí - GIẢM GIÁ 50%!",
      "shopnow":"Mua ngay",
      "create account":"Tạo tài khoản",
      "info":"Nhập thông tin chi tiết của bạn tại đây" ,
      "name":"Tên",
      "Email or Phone Number":"Email hoặc số điện thoại",
      "Password": "Mật khẩu",
      "Create Account": "Đăng kí",
      "google":"Đăng kí với Google",
      "Already": "Đã có tài khoản?",
      "login": "Đăng kí",
      'inputsearch':"Bạn đang tìm kiếm cái gì?"
    }
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en", 

    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;