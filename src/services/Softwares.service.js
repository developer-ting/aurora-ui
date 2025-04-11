import GraphQLAPI from "./Graphql.service";

/** Fetch Page */
export const getSingleSoftware = async (slug) => {
	const query = `
query GetSoftwaresBySlug {
  softwareBy(slug: "${slug}") {
    softwares {
      banner {
        title
        description
        buttonLink
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
        vimeoLink
      }
      introduction {
        tabTitle
        title
        description
        image {
          node {
            altText
            sourceUrl
          }
        }
      }
      availableRegions {
        tabTitle
        marqueeText
      }
      caseStudy {
        tabTitle
        title
        selectCaseStudies {
          nodes {
            ... on CaseStudy {
              title
              content
              featuredImage {
                node {
                  altText
                  sourceUrl
                }
              }
              caseStudies {
                selectLocation {
                  nodes {
                    ... on Country {
                      title
                    }
                  }
                }
                readTime
              }
              date
            }
          }
        }
      }
      ourClient {
        tabTitle
        title
        selectLogos {
          nodes {
            ... on ClientsLogo {
              title
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
              title
              content
              testimonials {
                designation
              }
            }
          }
        }
      }
      keyAdvantages {
        tabTitle
        title
        desciption
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
      whyAurora {
        tabTitle
        title
        description
        meterValue
        meterSpeed
        meterTitle
        meterEndpoint
        meterDescription
        meterCaption
      }
      expertise {
        tabTitle
        title
        description
        expertiseAccordion {
          accordionTitle
          accordionDescription
          buttonLink
          icon {
            node {
              altText
              sourceUrl
            }
          }
        }
      }
      customerSuccess {
        tabTitle
        sectionTitle
        customerSuccessRow {
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
      fourStepProcess {
        tabTitle
        processTitle
        description
        buttonLink
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
