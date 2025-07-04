interface ComponentPageProps {
  params: {
    slug: string;
  };
}

export default function ComponentPage({ params }: ComponentPageProps) {
  return (
    <div className="componentpg">
      <p>Component: {params.slug}</p>
    </div>
  );
}
