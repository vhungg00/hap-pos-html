"use strict";
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();

  $("#myCollapsible").collapse("hide");
  let isMobile = CheckMobile();

  if (isMobile) {
    HandleMobile();
  } else {
    HandleWeb();
  }

  // common

  //   handleShowMoreTopping();
  // isFilter Product
  //   $(".isFilter").on("click", () => {
  //     $(".isFilter__box").slideToggle();
  //   });
  //
  // handleShow more
  //   handleShowMoreText();

  handleSlide();
});

const CheckMobile = () => {
  let isMobile = false;

  if (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
      navigator.userAgent
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      navigator.userAgent.substr(0, 4)
    )
  ) {
    isMobile = true;
    return isMobile;
  }

  return isMobile;
};
const HandleWeb = () => {
  window.onscroll = function () {
    scrollFunction();
  };
};

function scrollFunction() {
  //   const mybutton = document.getElementById("myBtnScroll");
  // const header = $("#navCustom");
  // const headerText = $("#navCustom");
  // if (
  //     document.body.scrollTop > 20 ||
  //     document.documentElement.scrollTop > 20
  // ) {
  //     mybutton.style.display = "flex";
  //     // header.css("background-color", "#44b6eb");
  // } else {
  //     mybutton.style.display = "none";
  //     // header.css("background-color", "#fff");
  // }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const HandleMobile = () => {
  window.onscroll = function () {
    scrollFunction();
  };
  // popupSubscribe
  //   $("#popupSubscribe").modal({ show: true });
  //   // form
  //   handleForm();
  //   // handleShow more
  //   handleShowMoreText();
};

const handleSlide = () => {
  $(".reviews-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    draggable: true,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.9998 28.6695C22.8098 28.6695 22.6198 28.5995 22.4698 28.4495L15.9498 21.9295C14.8898 20.8695 14.8898 19.1295 15.9498 18.0695L22.4698 11.5495C22.7598 11.2595 23.2398 11.2595 23.5298 11.5495C23.8198 11.8395 23.8198 12.3195 23.5298 12.6095L17.0098 19.1295C16.5298 19.6095 16.5298 20.3895 17.0098 20.8695L23.5298 27.3895C23.8198 27.6795 23.8198 28.1595 23.5298 28.4495C23.3798 28.5895 23.1898 28.6695 22.9998 28.6695Z" fill="#777777"/>
    <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#DEDEDE"/>
    </svg>
    </button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.9101 28.6695C16.7201 28.6695 16.5301 28.5995 16.3801 28.4495C16.0901 28.1595 16.0901 27.6795 16.3801 27.3895L22.9001 20.8695C23.3801 20.3895 23.3801 19.6095 22.9001 19.1295L16.3801 12.6095C16.0901 12.3195 16.0901 11.8395 16.3801 11.5495C16.6701 11.2595 17.1501 11.2595 17.4401 11.5495L23.9601 18.0695C24.4701 18.5795 24.7601 19.2695 24.7601 19.9995C24.7601 20.7295 24.4801 21.4195 23.9601 21.9295L17.4401 28.4495C17.2901 28.5895 17.1001 28.6695 16.9101 28.6695Z" fill="#777777"/>
    <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#DEDEDE"/>
    </svg>
    </button>`,

    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: true,
          infinite: true,
        },
      },
    ],
    // autoplay: true,
    // autoplaySpeed: 1000,
  });

  $(".BoxItem4__body .box").slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    infinite: true,
    arrows: false,
    dots: false,
    draggable: true,
    variableWidth: true,
    // autoplay: true,
  });
};
