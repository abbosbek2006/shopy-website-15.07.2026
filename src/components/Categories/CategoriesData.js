// Rasmlar yo'lini loyihangizga qarab moslab olasiz
import ElectronicsImg from "../../assets/images/categories/electronics.png";
import FashionImg from "../../assets/images/categories/fashion.png";
import HomeImg from "../../assets/images/categories/home.png";
import BeautyImg from "../../assets/images/categories/beauty.png";
import SportsImg from "../../assets/images/categories/sports.png";
import AccessoriesImg from "../../assets/images/categories/accessories.png";

export const categoriesData = [
  {
    id: 1,
    name: "Electronics",
    image: ElectronicsImg,
    bgColor: "#eef2f6", // Har bir doiraning orqa foni har xil yumshoq rangda
  },
  {
    id: 2,
    name: "Fashion",
    image: FashionImg,
    bgColor: "#fceef0",
  },
  {
    id: 3,
    name: "Home & Kitchen",
    image: HomeImg,
    bgColor: "#fbf3ea",
  },
  {
    id: 4,
    name: "Beauty",
    image: BeautyImg,
    bgColor: "#f3eefa",
  },
  {
    id: 5,
    name: "Sports",
    image: SportsImg,
    bgColor: "#e8f5f1",
  },
  {
    id: 6,
    name: "Accessories",
    image: AccessoriesImg,
    bgColor: "#fbf1e8",
  },
];