import { renderStart } from "../utils/Commom/renderStart";
import Link from "next/link";
import { Post as PostInterFace } from "../types/post.type";
function Post({ data }) {
  return (
    <>
      {data.map((item: PostInterFace, index: number) => (
        <li
          key={index}
          className="post-item post-id-212446 style-4 clearfix tin-vip vipnoibat"
          style={{ borderColor: "#E13427" }}
        >
          <figure className="post-thumb">
            <Link href={`/detail/${item?.id}`} className="clearfix">
              <img
                className="lazy_done"
                src={item?.listImage?.postImg}
                data-src={item?.listImage?.postImg}
                alt="PHÒNG TRỌ MỚI XÂY RẤT ĐẸP SỐ 373/1/2A ĐƯỜNG LÝ THƯỜNG KIỆT, QUẬN TÂN BÌNH - GẦN BÊN TRƯỜNG ĐẠI HỌC BÁCH KHOA"
                height="100"
                width="100"
                data-loaded="true"
              />
            </Link>

            <span className="images-number">{item?.listImage?.total} ảnh</span>
            <span
              className="post-save js-btn-save"
              data-post-id="212446"
              title="Lưu tin này"
            >
              <i></i>
            </span>
          </figure>
          <div className="post-meta">
            <h3 className="post-title">
              <a style={{ color: "#E13427" }} href="">
                {renderStart(item?.start).length > 0 &&
                  renderStart(item?.start).map((start, index) => {
                    return <span key={index}>{start}</span>;
                  })}
                {item?.title}
              </a>
            </h3>

            <div className="meta-row clearfix">
              <span className="post-price">{item.attributes.price}</span>
              <span className="post-acreage">{item.attributes.acreage}</span>
              <span className="post-location">
                <a href="" title={item.title}>
                  {`${
                    item?.address.split(",")[item.address.split(",").length - 2]
                  },${
                    item?.address.split(",")[item.address.split(",").length - 1]
                  }`}
                </a>
              </span>
              <time className="post-time" title="Thứ 3, 09:27 21/02/2023">
                {item?.attributes.published}
              </time>
            </div>
            <div className="meta-row clearfix">
              <p className="post-summary">{JSON.parse(item?.description)}</p>
            </div>
            <div className="meta-row clearfix">
              <div className="post-author">
                <img src={item?.user?.avatar} alt="avatar" />
                <span className="author-name">{item.user.name}</span>
              </div>
              <a
                rel="nofollow"
                target="_blank"
                href={`https://zalo.me/${item.user.zalo}`}
                className="btn-quick-zalo"
              >
                Nhắn Zalo: {item.user.zalo}
              </a>
              <a
                rel="nofollow"
                target="_blank"
                href="tel:0918180057"
                className="btn-quick-call"
              >
                Gọi: {item.user.phone}
              </a>
            </div>
          </div>
        </li>
      ))}
    </>
  );
}
export default Post;
