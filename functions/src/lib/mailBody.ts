type FormPayload = {
  name: string,
  subject: string;
  email: string;
  content: string;
}

export const adminMailBody = (params: FormPayload) => {
  return `
以下内容で問い合わせフォームよりお問い合わせを受けつけました。
名前:
${params.name}
メールアドレス:
${params.email}
内容:
${params.content}
`;
};

export const thanksMailBody = (params: FormPayload) => {
  return `
${params.name} 様
お問い合わせありがとうございます。
以下の内容でお問い合わせを受け付けました。
=====================================
名前:
${params.name}
件名:
${params.subject}
メールアドレス:
${params.email}
内容:
${params.content}
=====================================

後ほど担当者よりご連絡を差し上げます。
以上、よろしくお願いいたします。
`;
};
