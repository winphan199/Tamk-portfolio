import classNames from 'classnames';

interface AboutCardProps {
  imageFirst: boolean;
  title: string;
  description: string;
  imageUrl: string;
  figure: number;
  figureTitle: string;
}

function AboutCard({ imageFirst = false, title, description, imageUrl, figure, figureTitle }: AboutCardProps) {
  return (
    <div className="flex py-10">
      <div className={classNames('flex-1 flex', imageFirst ? 'order-1 mr-4' : 'order-2 ml-4')}>
        <div>
          <img src={imageUrl} alt={title} className="w-full rounded-lg object-cover max-w-[800px]" />
        </div>
        <div className="ml-4">
          <h2 className="text-4xl text-brand font-extrabold">{figure}+</h2>
          <h4 className="text-sm font-semibold">{figureTitle}</h4>
        </div>
      </div>
      <div className={classNames('flex-1', !imageFirst ? 'order-1 mr-4' : 'order-2 ml-4')}>
        <h2 className="text-3xl font-bold text-brand mb-5">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default AboutCard;
