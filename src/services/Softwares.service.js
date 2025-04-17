import GraphQLAPI from "./Graphql.service";

/** Fetch Page */
export const getSingleSoftware = async (slug) => {
	const query = `
query GetProductBySlug {
  softwareBy(slug: "${slug}") {
    title
    slug
    softwares {
      thumbnail {
        banner {
          node {
            altText
            sourceUrl
          }
        }
        logo {
          node {
            sourceUrl
            altText
          }
        }
        gradient {
          from
          to
        }
        shortDescription
      }
      ourClient {
        selectLogos {
          nodes {
            ... on ClientsLogo {
              id
              featuredImage {
                node {
                  altText
                  sourceUrl
                }
              }
            }
          }
        }
        testimonials {
          nodes {
            ... on Testimonial {
              id
              content
              title
              testimonials {
                designation
              }
            }
          }
        }
      }
      availableRegions {
        marqueeText
        tabTitle
      }
      banner {
         buttonText
        buttonLink
        description
        title
        vimeoLink
        desktopThumbnail {
          node {
            altText
            sourceUrl
          }
        }
        mobileThumbnail {
          node {
            altText
            sourceUrl
          }
        }
      }
      caseStudy {
        tabTitle
        title
                selectCaseStudies {
          nodes {
            ... on CaseStudy {
              id
              content
              title
              slug
              caseStudies {
                selectLocation {
                  nodes {
                    ... on Country {
                      id
                      title
                      slug
                    }
                  }
                }
                readTime
              }
              featuredImage {
                node {
                  altText
                  sourceUrl
                }
              }
            }
          }
        }
      }
      customerSuccess {
        sectionTitle
        tabTitle
        customerSuccessRow {
          description
          title
          icon {
            node {
              altText
              sourceUrl
            }
          }
        }
      }
      expertise {
        description
        tabTitle
        title
        expertiseAccordion {
          accordionDescription
          accordionTitle
          buttonLink
          icon {
            node {
              altText
              sourceUrl
            }
          }
        }
      }
      introduction {
        description
        tabTitle
        title
        image {
          node {
            altText
            sourceUrl
          }
        }
      }
      keyAdvantages {
        desciption
        tabTitle
        title
        advantages {
          advantagesTitle
          advantagesDescription
          icon {
            node {
              altText
              sourceUrl
            }
          }
        }
      }
      map {
        marquee
      }
      whyAurora {
        title
        description
        startText
        endText
        endPoint
        list{
             title
             description
             caption
             value
        }
      }
      fourStepProcess {
        buttonLink
        description
        processTitle
        tabTitle
        process {
          image {
            node {
              altText
              sourceUrl
            }
          }
          processDetails {
            description
          }
        }
      }
    }
  }
}
    `;
	const res = await GraphQLAPI(query);
	return res;
};

/** Fetch Page */
export const getSoftwarePage = async (slug) => {
	const query = `
query GetPageSoftwares {
  page(id: "software", idType: URI) {
    title
    slug
    softwareLanding {
      banner {
        title
        description
      }
      mapMarquee
      keyAdvantages {
        title
        tabTitle
        description
        advantages {
          title
          description
          icon {
            node {
              altText
              sourceUrl
            }
          }
        }
      }
    }
  }
  softwares {
    nodes {
      title
      slug
      softwares {
        thumbnail {
          banner {
            node {
              altText
              sourceUrl
            }
          }
          logo {
            node {
              sourceUrl
              altText
            }
          }
          gradient {
            from
            to
          }
          shortDescription
        }
        ourClient {
          selectLogos {
            nodes {
              ... on ClientsLogo {
                id
                featuredImage {
                  node {
                    altText
                    sourceUrl
                  }
                }
              }
            }
          }
          testimonials {
            nodes {
              ... on Testimonial {
                id
                content
                title
                testimonials {
                  designation
                }
              }
            }
          }
        }
      }

    }
  }
}
      `;
	const res = await GraphQLAPI(query);
	return res;
};
