interface ISectionProps {
  children: React.ReactNode;
  className?: string;
}

function Section({ children, className = '' }: ISectionProps) {
  return <section className={`py-20 px-12 ${className}`}>{children}</section>;
}

export default Section;
