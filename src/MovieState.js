//Import Images
import evil from './img/evil-alien.jpg';
import fifties from './img/50salien.jpg';
import original from './img/og-alienjpg.jpg';
import ufoEvil from './img/Prometheus.jpg';
import ufoFifties from './img/old-ufo.jpg';
import original2 from './img/ufo.jpg';

export const MovieState = () => {
  return [
    {
      title: 'The Evil Alien',
      mainImg: evil,
      secondaryImg: ufoEvil,
      url: '/work/the-athlete',
      awards: [
        {
          title: 'Truly A masterpiece',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Fresh look on a evil alien.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'It’s okay lmao.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
    {
      title: 'The Oldschool Alien',
      mainImg: fifties,
      url: '/work/good-times',
      secondaryImg: ufoFifties,
      awards: [
        {
          title: 'Truly A masterpiece',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Fresh look on a oldie but goldie.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'It’s okay lmao.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
    {
      title: 'The Original Alien',
      mainImg: original,
      url: '/work/the-racer',
      secondaryImg: original2,
      awards: [
        {
          title: 'Truly A masterpiece',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Fresh look on a cool alien',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'It’s okay lmao.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
  ];
};
