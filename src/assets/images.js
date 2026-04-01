const imagesModules = import.meta.glob('./*.{png,jpg,jpeg,svg}', {eager: true});

const images = Object.fromEntries(
  Object.entries(imagesModules).map(([path, module]) => {
    // odstraníme './' a vrátíme jen název souboru
    const name = path.replace('./', '');
    return [name, module.default];
  })
);

export default images;