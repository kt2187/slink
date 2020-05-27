# Social Networking App

> Connecting Students to Educators and Employers

This networking app connects motivated teens to educators and employers. It is a work-in-progress and will eventually include authentication, profiles, forum posts, and teacher recommendations. It's a place for teens to showcase their academic and extracurricular accomplishments. 

## Quick Start

### Add a default.json file in config folder with the folowing

```
{
  "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
  "jwtSecret": "secret"
}
```

### Install server dependencies

```bash
npm install
```

### Install client dependencies

```bash
cd client
npm install
```

### Run both Express & React from root

```bash
npm run dev
```

### Build for production

```bash
cd client
npm run build
```

## App Info

### Author

Katie Barriere

[Katie Barriere](http://www.katiebarriere.com)

### Version

1.0.0

### License

This project is licensed under the MIT License
