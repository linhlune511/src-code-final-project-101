import { InlineColumns } from "./InlineColumns";

export function LoveIllustration() {
  return (
    <div className="love-illustration">
      <div className="title-illustration">
        [Bonus] Minh họa về tình yêu của chúng ta dưới góc nhìn của một đứa mới
        biết dùng useState
      </div>
      <span style={{ fontSize: "18px" }}>
        <em>
          Hãy tương tác để khám phá. Đừng sợ, ấn vào button không quay lại thật
          đâu, chỉ là mấy cái setCount thui 🥺
        </em>
      </span>
      <div className="col">
        <InlineColumns />
      </div>
    </div>
  );
}
