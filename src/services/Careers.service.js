import GraphQLAPI from "./Graphql.service";

/** Fetch Page */
export const getLifeAtAurora = async (slug) => {
	const query = `
query MyQuery {
  page(id: "life-at-aurora", idType: URI) {
    lifeAtAurora {
      banner {
        title
        description
        videoLink
        dekstopimage {
          node {
            altText
            sourceUrl
          }
        }
        mobileimage {
          node {
            altText
            sourceUrl
          }
        }
      }
      keyAdvantages {
        title
        description
        tabTitle
        accordian {
          title
          description
          buttonLink
          icon {
            node {
              altText
              sourceUrl
            }
          }
        }
      }
      stats {
        auroreans
        nationalities
      }
         globalMap {
        marqueetext
      }
    }
    slug
  }
  offices {
    nodes {
      offices {
        thumbnail {
          node {
            altText
            sourceUrl
          }
        }
        map {
          lat
          lng
        }
      }
      title
      slug
    }
  }
}
    `;
	const res = await GraphQLAPI(query);
	return res;
};
