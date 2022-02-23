import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from './components/MainFeaturedPost/MainFeaturedPost';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

const theme = createTheme();

function App(props) {
  const jsonDataEn = require('./data/english.json');
  const jsonDataIn = require('./data/hindi.json');
  const [data, setData] = React.useState(jsonDataEn);

  const { lang } = props;

  React.useEffect(() => {
    if (lang) {
      if (lang === 'en-us') {
        setData(jsonDataEn);
      } else if (lang === 'hi-in') {
        setData(jsonDataIn);
      } else {
        setData(jsonDataEn);
      }
    } else {
      setData(jsonDataEn);
    }
  }, [jsonDataIn, jsonDataEn, lang]);

  const mainFeaturedPost = {
    title: data.hero_1_title,
    description: data.p_1_value,
    image: data.hero_1_image,
    imageText: 'main image description',
    date: data['article-info_1_date'],
  };
  const posts = [
    data.p_2_value,
    data.p_3_value,
    data.p_4_value,
    data.p_7_value,
    data.p_8_value,
    data.p_9_value,
    data.p_10_value,
  ];
  const sidebar = {
    title: `Total # of Cities: ${data.total_cities_1_value}`,
    description: data.p_5_value,
    subTitle: data.p_6_value,
    subDescription: data['compare-tabs_1_method'],
    social: [
      { name: 'GitHub', icon: GitHubIcon },
      { name: 'Twitter', icon: TwitterIcon },
      { name: 'Facebook', icon: FacebookIcon },
    ],
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title={data.hero_1_title} posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              social={sidebar.social}
              subDescription={sidebar.subDescription}
              subTitle={sidebar.subTitle}
              data={data}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title={`Article by: ${data['article-info_1_byline']}`}
        description={data['article-info_1_category']}
      />
    </ThemeProvider>
  );
}

export default App;
