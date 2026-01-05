const reviews = [
    {
        id: 1,
        name: 'Johan',
        description: 'This is very amazing',
        userImage: ''
    },
    {
        id: 2,
        name: 'Lisa',
        description: 'This is very amazing',
        userImage: ''
    },
    {
        id: 3,
        name: 'Raju',
        description: 'This is very amazing',
        userImage: ''
    },
    {
        id: 4,
        name: 'Riya',
        description: 'This is very amazing',
        userImage: ''
    },
    {
        id: 5,
        name: 'Ratul',
        description: 'This is very amazing',
        userImage: ''
    },
    {
        id: 6,
        name: 'Alex',
        description: 'This is very amazing',
        userImage: ''
    },
    {
        id: 7,
        name: 'Ritu',
        description: 'This is very amazing',
        userImage: ''
    },
    {
        id: 8,
        name: 'Riya',
        description: 'This is very amazing',
        userImage: ''
    },
]



import Marquee from "react-fast-marquee";
type Review = {
  id: number;
  name: string;
  description: string;
  userImage?: string;
};

const ReviewCard = ({ name, description, userImage }: Review) => {
  return (
    <div className="w-72 shrink-0 rounded-2xl border border-orange-100 bg-white/80 p-5 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      <div className="flex items-center gap-3">
        {/* Avatar */}
        {userImage ? (
          <img
            src={userImage}
            alt={name}
            className="h-10 w-10 rounded-full object-cover border"
          />
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-200 font-bold text-orange-700">
            {name.charAt(0)}
          </div>
        )}

        <h1 className="text-sm font-semibold text-black">{name}</h1>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-gray-600">
        “{description}”
      </p>
    </div>
  );
};

const CustomerReview = () => {
//  Review api

   const mid = Math.ceil(reviews.length / 2);
  const firstRow = reviews.slice(0, mid);
  const secondRow = reviews.slice(mid);

  return (
    <div className="relative  overflow-hidden px-4 mt-10">
      <h1 className="text-4xl text-center font-bold text-orange-600 underline-offset-auto underline">
        What Our Customers Say
      </h1>
 
      {/* First Row */}
      <Marquee pauseOnHover className="[--duration:25s] mt-10">
        <div className="flex gap-8 px-4">
          {firstRow.map((review) => (
            <ReviewCard key={`first-${review.id}`} {...review} />
          ))}
        </div>
      </Marquee>

      {/* Second Row */}
      <Marquee pauseOnHover direction="right" className="[--duration:25s] mt-8">
        <div className="flex gap-8 px-4">
          {secondRow.map((review) => (
            <ReviewCard key={`second-${review.id}`} {...review} />
          ))}
        </div>
      </Marquee>

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32  from-white" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32  from-white" />
    </div>
  );
}
export default CustomerReview;


