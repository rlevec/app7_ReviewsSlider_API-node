import express from "express";

const router = express.Router();

const users = [
 {
    id: 1,
    image:
      'https://i.imgur.com/15Z1YVa.jpg',
    name: 'selma hajek',
    title: 'project manager',
    quote:
     "Project management can be defined as a way of developing structure in a complex project, where the independent variables of time, cost, resources and human behavior come together.",
  },
  {
    id: 2,
    image:
      'https://i.imgur.com/sbjVIvD.jpg',
    name: 'ramzes flavius',
    title: 'system administrator',
    quote:
      "An e-mail from a reader says that liberals like to take the moral high ground, even though their own moral relativism means that there is no moral high ground.",
  },
  {
    id: 3,
    image:
      'https://i.imgur.com/4EACi0Y.jpg',
    name: 'izabela gadot',
    title: 'product manager',
    quote:
      "When customers love your product, they become ambassadors. There’s nothing better than someone using your app everyday and trying to get their friends and family to do the same.",
  },
  {
    id: 4,
    image:
      'https://i.imgur.com/snovgnr.jpg',
    name: 'gabriel drezden',
    title: 'Front-End developer',
    quote:
      "Your website is the center of your digital ecosystem, like a brick and mortar location, the experience matters once a customer enters, just as much as the perception they have of you before they walk through the door.",
  },
]

router.get('/', (req, res) => {
    res.send(users);
});

export default router
