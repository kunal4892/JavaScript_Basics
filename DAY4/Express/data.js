export const courses = [
    {
      id: 1,
      title: "React",
      price: 5000,
      likes: 400,
      rating: 5,
      imageUrl:
        "https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/97b31/React.jpg",
    },
    {
      id: 2,
      title: "Redux",
      price: 4000,
      likes: 600,
      rating: 5,
      imageUrl: "https://logicalidea.co/wp-content/uploads/2020/05/Redux.jpg",
    },
    {
      id: 3,
      title: "Node",
      price: 6000,
      likes: 900,
      rating: 4,
      imageUrl:
        "https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/01/node-js-logo.png?fit=1200%2C600&ssl=1",
    },
    {
      id: 4,
      title: "Angular",
      price: 5000,
      likes: 200,
      rating: 3,
      imageUrl:
        "https://www.trio.dev/hubfs/Imported_Blog_Media/7fad34d867a32f732b37534ff013e916-3-2.jpg",
    },
    {
      id: 5,
      title: "Flutter",
      price: 7000,
      likes: 700,
      rating: 4,
      imageUrl: "https://miro.medium.com/max/2000/1*PCKC8Ufml-wvb9Vjj3aaWw.jpeg",
    },
    {
      id: 6,
      title: "CSS3",
      price: 7000,
      likes: 700,
      rating: 4,
      imageUrl:
        "https://bs-uploads.toptal.io/blackfish-uploads/uploaded_file/file/185789/image-1581552024454-3a5f9ecad40f39e372110b676dba5ac0.png",
    },
    {
      id: 7,
      title: "StencilJS",
      price: 6000,
      rating: 5,
      likes: 100,
      imageUrl: "https://stenciljs.com/stencil-og.png",
    },
    {
      id: 8,
      title: "AureliaJS",
      price: 6000,
      rating: 5,
      likes: 100,
      imageUrl:
        "https://www.valuecoders.com/blog/wp-content/uploads/2016/12/aurleiajs1.jpg",
    },
    {
      id: 10,
      title: "VueJS",
      price: 7000,
      rating: 5,
      likes: 200,
      imageUrl:
        "data:image/png;base64,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",
    },
    {
      id: 12,
      title: "C#",
      price: 800,
      rating: 5,
      likes: 700,
      imageUrl:
        "https://www.codeguru.com/wp-content/uploads/2021/08/C-Sharp-Tutorials.png",
    },
  ];