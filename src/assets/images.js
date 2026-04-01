const images = import.meta.globEager('./*.{png,jpg,jpeg,svg}');

const imageMap = Object.fromEntries(
  Object.entries(images).map(([path, module]) => {
    // odstraníme './' a vrátíme jen název souboru
    const name = path.replace('./', '');
    return [name, module.default];
  })
);

export default imageMap;