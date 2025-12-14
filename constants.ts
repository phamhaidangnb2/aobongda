import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Áo Đấu Manchester United Sân Nhà 23/24",
    team: "Manchester United",
    price: 1200000,
    image: "https://picsum.photos/seed/mu_home/400/400",
    category: "Club",
    description: "Màu đỏ truyền thống, thiết kế hiện đại với họa tiết hoa hồng Lancaster."
  },
  {
    id: 2,
    name: "Áo Đấu Real Madrid Sân Nhà 23/24",
    team: "Real Madrid",
    price: 1350000,
    image: "https://picsum.photos/seed/real_home/400/400",
    category: "Club",
    description: "Màu trắng hoàng gia, điểm nhấn màu vàng kim loại sang trọng."
  },
  {
    id: 3,
    name: "Áo Đấu Tuyển Việt Nam 2024",
    team: "Vietnam",
    price: 850000,
    image: "https://picsum.photos/seed/vn_home/400/400",
    category: "National",
    description: "Niềm tự hào dân tộc, chất liệu thoáng khí phù hợp khí hậu nhiệt đới."
  },
  {
    id: 4,
    name: "Áo Đấu Barcelona Sân Khách 23/24",
    team: "Barcelona",
    price: 1250000,
    image: "https://picsum.photos/seed/barca_away/400/400",
    category: "Club",
    description: "Thiết kế màu trắng tri ân Johan Cruyff, phong cách cổ điển."
  },
  {
    id: 5,
    name: "Áo Đấu Arsenal Sân Nhà 23/24",
    team: "Arsenal",
    price: 1300000,
    image: "https://picsum.photos/seed/arsenal_home/400/400",
    category: "Club",
    description: "Đỏ và trắng, kỷ niệm 20 năm mùa giải bất bại Invincibles."
  },
  {
    id: 6,
    name: "Áo Đấu Tuyển Argentina 3 Sao",
    team: "Argentina",
    price: 1400000,
    image: "https://picsum.photos/seed/arg_home/400/400",
    category: "National",
    description: "Áo đấu nhà vô địch thế giới với 3 ngôi sao trên ngực áo."
  },
  {
    id: 7,
    name: "Áo Đấu Manchester City Sân Nhà 23/24",
    team: "Manchester City",
    price: 1250000,
    image: "https://picsum.photos/seed/mci_home/400/400",
    category: "Club",
    description: "Xanh da trời nhạt, kỷ niệm 20 năm sân vận động Etihad."
  },
  {
    id: 8,
    name: "Áo Đấu Liverpool Sân Nhà 23/24",
    team: "Liverpool",
    price: 1200000,
    image: "https://picsum.photos/seed/liv_home/400/400",
    category: "Club",
    description: "Đỏ rực lửa, thiết kế cổ tròn cổ điển thập niên 70."
  }
];

export const SIZES: string[] = ['S', 'M', 'L', 'XL', 'XXL'];

export const AI_SYSTEM_INSTRUCTION = `
Bạn là trợ lý ảo bán hàng chuyên nghiệp của cửa hàng 'Vua Áo Đấu'.
Nhiệm vụ của bạn là tư vấn cho khách hàng về quần áo bóng đá.
Bạn có kiến thức sâu rộng về các đội bóng, cầu thủ, và chất liệu áo đấu.
Hãy giúp khách hàng chọn size dựa trên chiều cao và cân nặng nếu họ cung cấp (Ví dụ: 1m70 60kg thường mặc size M).
Giọng điệu: Thân thiện, nhiệt tình, sử dụng tiếng Việt tự nhiên, am hiểu bóng đá (dùng từ chuyên môn như 'sân nhà', 'sân khách', 'thoáng khí').
Nếu khách hỏi về giá, hãy nhắc họ xem trực tiếp trên sản phẩm vì giá có thể thay đổi, nhưng bạn có thể đưa ra mức giá tham khảo chung (khoảng 800k - 1tr5).
Chỉ trả lời ngắn gọn, đi thẳng vào vấn đề.
`;
