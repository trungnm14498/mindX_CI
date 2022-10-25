const data = [
    {
        id: 1,
        image: "https://photo-resize-zmp3.zmdcdn.me/w128_r1x1_webp/cover/5/6/2/c/562cb05c6d9c73d5919aac8dcf5d3c8b.jpg",
        title: "#011 - LOWKEY 'phá đảo thế giới ảo' trong Hi-5 Quiz!",
        author: "Hi-5 Quiz",
        date: "26/08/2022",
        duration: "19"
    },

    {
        id: 2,
        image: "https://photo-resize-zmp3.zmdcdn.me/w128_r1x1_webp/images/a/2/f/4/a2f4153d76830e7a34bd0e188155da0c.jpg",
        title: "Tự Chủ, Tự Hạnh Phúc - Tri kỷ cảm xúc #253",
        author: "Tri kỷ cảm xúc",
        date: "24/10/2022",
        duration: "25"
    },

    {
        id: 3,
        image: "https://photo-resize-zmp3.zmdcdn.me/w128_r1x1_webp/images/2/c/3/9/2c393e3918460b79fac9a30f182bbd7c.jpg",
        title: "85. Hành Trình Hiểu về bản thân",
        author: "HIEU.TV",
        date: "11/10/2022",
        duration: "19"
    },

    {
        id: 4,
        image: "https://photo-resize-zmp3.zmdcdn.me/w128_r1x1_webp/images/a/f/1/5/af15ba0be27f24415d5a3ec11e98d5e3.jpg",
        title: "203. Cách xử lý thông minh khi bị sếp đổ lỗi",
        author: "Huynh Duy Khuong Show",
        date: "21/10/2022",
        duration: "18"
    },

    {
        id: 5,
        image: "https://photo-resize-zmp3.zmdcdn.me/w128_r1x1_webp/images/5/5/0/c/550c85fa38f8505a79c0ddd251b59ec0.jpg",
        title: "Khi mâu thuẫn thế hệ không chỉ bắt nguồn từ tuổi tác | Tập 49",
        author: "Nguyễn Hữu Trí Podcast",
        date: "18/10/2022",
        duration: "24"
    },

    {
        id: 6,
        image: "https://photo-resize-zmp3.zmdcdn.me/w128_r1x1_webp/images/4/b/7/2/4b72201158a83951be8be9f39bc29abf.jpg",
        title: " #26 Bí quyết thành công của người Do Thái | Đắp Chăn Nằm Nghe Tun Kể",
        author: "Đắp Chăn Nằm Nghe Tun Kể",
        date: "16/10/2022",
        duration: "16"
    },

    {
        id: 7,
        image: "https://photo-resize-zmp3.zmdcdn.me/w128_r1x1_webp/cover/f/c/0/a/fc0a178aa52ef361d44096fc7feb38e8.jpg",
        title: "#021 Thời buổi người người Review nhà nhà Review",
        author: "Today Story",
        date: "28/07/2022",
        duration: "10"
    },
    
    {
        id: 8,
        image: "https://photo-resize-zmp3.zmdcdn.me/w128_r1x1_webp/images/4/2/c/c/42cce33745e08852ca7782bb52ded995.jpg",
        title: "Học tập hiệu quả cho KẺ KHÔNG THÍCH HỌC? | Keira Ngo x Ths. Hảo Quang",
        author: "Spiderum",
        date: "20/10/2022",
        duration: "41"
    }
]

const n = Math.ceil(data.length/2);

const data1 = data.splice(0, n);
const data2 = data.splice(-n);

export {data1, data2};