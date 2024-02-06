interface Option {
    id: number;
    text: string;
  }

  // Define an interface for the form data item
  interface FormDataItem {
    id: number;
    question: string;
    responseType: string;
    options?: Option[]; // Optional for response types other than single/multi select
    selectedOption?: Option; // Only applicable for single choice select response type
    selectedOptions?: Option[]; // Only applicable for multi-select response type
    response?: string; // Only applicable for text area or link response type
  }
  export type FormDataEntry = {
    title: string;
    response: string;
    details: FormDataItem[];
  };

  
  export const dummyFormData: FormDataEntry[] = [
    {
      title: "Sample Form",
      response: "This is a sample form for demonstration purposes.",
      details: [
        {
          id: 1,
          question: "What is your favorite color?",
          responseType: "Single choice select",
          options: [
            { id: 1, text: "Red" },
            { id: 2, text: "Blue" },
            { id: 3, text: "Green" }
          ],
          selectedOption: { id: 2, text: "Blue" }
        },
        {
          id: 2,
          question: "What are your hobbies?",
          responseType: "Multi-select",
          options: [
            { id: 1, text: "Reading" },
            { id: 2, text: "Gaming" },
            { id: 3, text: "Cooking" }
          ],
          selectedOptions: [
            { id: 1, text: "Reading" },
            { id: 3, text: "Cooking" }
          ]
        },
        {
          id: 3,
          question: "Describe your favorite vacation spot.",
          responseType: "Large text area",
          response: "My favorite vacation spot is a secluded beach on an island in the Caribbean. The beach is surrounded by lush greenery and crystal-clear turquoise waters. The soft white sand is perfect for relaxing and soaking up the sun. I love snorkeling in the coral reefs and exploring the underwater world teeming with colorful fish and marine life. Watching the sunset from the beach is truly magical, and the gentle sound of waves lapping against the shore is incredibly soothing."
        },
        {
          id: 4,
          question: "Enter the URL of your portfolio.",
          responseType: "Link",
          response: "https://example.com/portfolio"
        },
        {
          id: 5,
          question: "What is your email address?",
          responseType: "Small text area",
          response: "example@example.com"
        },
        {
          id: 6,
          question: "What is your favorite food?",
          responseType: "Single choice select",
          options: [
            { id: 1, text: "Pizza" },
            { id: 2, text: "Sushi" },
            { id: 3, text: "Burgers" }
          ],
          selectedOption: { id: 3, text: "Burgers" }
        },
        {
          id: 7,
          question: "List three countries you want to visit.",
          responseType: "Multi-select",
          options: [
            { id: 1, text: "Japan" },
            { id: 2, text: "Italy" },
            { id: 3, text: "Australia" }
          ],
          selectedOptions: [
            { id: 1, text: "Japan" },
            { id: 3, text: "Australia" }
          ]
        },
        {
          id: 8,
          question: "Describe your dream job.",
          responseType: "Large text area",
          response: "My dream job would involve working as a software engineer at a company that values innovation and creativity. I want to be part of a team that tackles challenging problems and develops cutting-edge solutions that positively impact people's lives. I envision a work environment that encourages collaboration, continuous learning, and personal growth. Above all, I want to feel passionate about the work I do and have the opportunity to make a meaningful contribution to the world."
        },
        {
          id: 9,
          question: "Enter the URL of your LinkedIn profile.",
          responseType: "Link",
          response: "https://www.linkedin.com/in/example/"
        },
        {
          id: 10,
          question: "What is your phone number?",
          responseType: "Small text area",
          response: "123-456-7890"
        },
        {
          id: 11,
          question: "What is your favorite movie genre?",
          responseType: "Single choice select",
          options: [
            { id: 1, text: "Action" },
            { id: 2, text: "Comedy" },
            { id: 3, text: "Drama" }
          ],
          selectedOption: { id: 2, text: "Comedy" }
        },
        {
          id: 12,
          question: "List two languages you speak fluently.",
          responseType: "Multi-select",
          options: [
            { id: 1, text: "English" },
            { id: 2, text: "Spanish" },
            { id: 3, text: "French" }
          ],
          selectedOptions: [
            { id: 1, text: "English" },
            { id: 2, text: "Spanish" }
          ]
        },
        {
          id: 13,
          question: "Describe your favorite book.",
          responseType: "Large text area",
          response: "My favorite book is 'To Kill a Mockingbird' by Harper Lee. It's a timeless classic that addresses important themes such as racial injustice, morality, and compassion. The characters are well-developed, and the storytelling is captivating. The novel's message resonates with readers of all ages and continues to be relevant in today's society."
        },
        {
          id: 14,
          question: "Enter the URL of your personal blog.",
          responseType: "Link",
          response: "https://www.exampleblog.com/"
        },
        {
          id: 15,
          question: "What is your favorite outdoor activity?",
          responseType: "Small text area",
          response: "Hiking"
        },
        {
          id: 16,
          question: "What is your favorite season?",
          responseType: "Single choice select",
          options: [
            { id: 1, text: "Spring" },
            { id: 2, text: "Summer" },
            { id: 3, text: "Fall" },
            { id: 4, text: "Winter" }
          ],
          selectedOption: { id: 3, text: "Fall" }
        },
        {
          id: 17,
          question: "List two sports you enjoy playing.",
          responseType: "Multi-select",
          options: [
            { id: 1, text: "Soccer" },
            { id: 2, text: "Tennis" },
            { id: 3, text: "Basketball" }
          ],
          selectedOptions: [
            { id: 1, text: "Soccer" },
            { id: 2, text: "Tennis" }
          ]
        },
        {
          id: 18,
          question: "Describe your ideal weekend getaway.",
          responseType: "Large text area",
          response: "My ideal weekend getaway would be a trip to a cozy cabin in the mountains. I envision spending my days hiking through scenic trails, breathing in the fresh mountain air, and enjoying the breathtaking views. In the evenings, I would relax by a crackling fireplace, sipping hot cocoa and stargazing. It's the perfect opportunity to unwind, recharge, and connect with nature."
        },
        {
          id: 19,
          question: "Enter the URL of your Twitter profile.",
          responseType: "Link",
          response: "https://twitter.com/example"
        },
        {
          id: 20,
          question: "What is your favorite dessert?",
          responseType: "Small text area",
          response: "Chocolate cake"
        }
      ]
    }
  ];
  