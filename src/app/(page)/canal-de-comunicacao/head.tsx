const Head = () => {
  return (
    <>
      <title>Canal de Denúncia</title>
      <meta name="Complicance" content="complicance" />
      <link rel="icon" href="/favicon.ico" />
      <script src="//titulares.becompliance.com/becompliance.js" defer></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            becompliance_form.create_form({
              client : 'f091c8ff-b0ca-4aff-bbea-5ae6f14822b3',
              form : 'dad46e5b-247f-4dd5-925e-c142c7dfef2d'
            });
          `
        }}
      />
    </>
  );
};

export default Head;
