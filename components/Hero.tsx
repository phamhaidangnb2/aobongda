import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-emerald-900 overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          src="https://picsum.photos/seed/stadium_bg/1920/1080"
          alt="Stadium Background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 to-transparent mix-blend-multiply" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 flex flex-col items-start">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-md">
          Đam Mê <br/> <span className="text-emerald-400">Trên Sân Cỏ</span>
        </h1>
        <p className="mt-6 text-xl text-emerald-100 max-w-3xl drop-shadow-sm">
          Sở hữu ngay những mẫu áo đấu mới nhất mùa giải 2023/2024. 
          Chất lượng chính hãng, thiết kế đỉnh cao, sẵn sàng cùng bạn tỏa sáng.
        </p>
        <div className="mt-10">
          <a
            href="#products"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-emerald-900 bg-white hover:bg-emerald-50 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Mua Ngay
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
