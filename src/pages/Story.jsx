
import { useLocation } from "react-router-dom";

function Story() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const name = params.get('name');
  const animal = params.get('animal');
  const topic = params.get('topic');

  const beginnings = [
    `روزی روزگاری، کودکی به نام ${name} با دوست جادویی‌اش یعنی ${animal} زندگی می‌کرد...`,
    `در سرزمینی دور، ${name} کوچولو همراه ${animal} به دنبال ماجراجویی می‌گشتند...`,
    `${name} و ${animal} بهترین دوستان یک روستای جادویی بودند که همه چیز در آن ممکن بود...`
  ];
  const middles = [
    `روزی تصمیم گرفتند سفری برای کشف راز ${topic} شروع کنند.`,
    `${name} از ${animal} خواست که او را در جستجوی ${topic} همراهی کند.`,
    `با کمک هم، ماجراجویی پر رمز و رازی درباره‌ی ${topic} آغاز شد.`
  ];
  const endings = [
    `در پایان سفرشان، فهمیدند که ${topic} چقدر ارزشمند است و با قلبی پر از شادی به خانه بازگشتند.`,
    `آنها با هم یاد گرفتند که ${topic} می‌تواند دنیا را بهتر کند.`,
    `${name} و ${animal} پس از ماجراهای فراوان، قهرمانان داستان ${topic} شدند.`
  ];

  const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-purple-700 to-indigo-700 text-white p-6">
      <h1 className="text-2xl font-bold mb-4">قصه‌ی جادویی تو</h1>
      <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-xl w-full text-justify leading-loose">
        {random(beginnings)} {random(middles)} {random(endings)}
      </div>
    </div>
  );
}

export default Story;
