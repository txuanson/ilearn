import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProfileMenber from "./ProfileMenber";

export default function AboutUs() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const menber = [
    {
      name: "Tran Xuan Son",
      description: "Leader, Backend",
      srcImg: "/avataTXS.jpg",
      linkFb: "https://www.facebook.com/km.sr08",
      linkedIn: "https://www.linkedin.com/in/txson666",
      linkGit: "https://github.com/txuanson",
    },
    {
      name: "Thai Tran Hong Phuc",
      description: "Frontend",
      srcImg: "/avataTTHP.jpg",
      linkFb: "https://www.facebook.com/phucthaii1820",
      linkedIn: "https://www.linkedin.com/in/cloudy-night-57bb9021b/",
      linkGit: "https://github.com/phucthaii1820",
    },
    {
      name: "Le Thi Phuong Linh",
      description: "Frontend, Design Leader",
      srcImg: "/avataLTPL.jpg",
      linkFb: "https://www.facebook.com/profile.php?id=100011703906233",
      linkedIn: "",
      linkGit: "https://github.com/thisislins",
    },
    {
      name: "Hoang Le Khanh",
      description: "Tester, Team Assistant",
      srcImg: "/avataHLK.jpg",
      linkFb: "https://www.facebook.com/profile.php?id=100007126908309",
      linkedIn: "https://www.linkedin.com/in/hoang-karius-70b747220/",
      linkGit: "https://github.com/KariusHan4401",
    },
    {
      name: "Nguyen Hoai Thuong",
      description: "Design, Frontend",
      srcImg: "/avataNHT.jpg",
      linkFb: "https://www.facebook.com/gruviamon",
      linkedIn: "",
      linkGit: "https://github.com/thuonghoainguyen2101",
    },
  ];
  return (
    <div>

      <div className="text-xl font-bold pl-2 pb-0 mt-16 ">
          <hr className="mb-8"></hr>
        <div className="text-3xl text-center mb-2">About Us</div>
      </div>
      <Slider {...settings}>
          {menber.map((item) => (
          <div className="p-2">
            <ProfileMenber child={item}></ProfileMenber>
          </div>
        ))}
      </Slider>
    </div>
  );
}
