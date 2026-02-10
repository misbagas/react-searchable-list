import SearchableList from "../SearchableList";

export default {
  title: "Components/SearchableList",
  component: SearchableList,
  // This helps center the component in the Storybook preview window
  parameters: {
    layout: "centered",
  },
  // Automatically generates documentation
  tags: ["autodocs"],
};

const frameworks = [
  "JavaScript", "React", "Next.js", "TypeScript",
  "Node.js", "Vue.js", "Angular"
];

// 1. Default / Multiple Selection Story
export const Default = {
  args: {
    options: frameworks,
    multiple: true,
    searchable: true,
    usePortal: false,
    enableLimit: true,
    enableSelection: true,
    showFooter: true,
    placeholder: "Search frameworks...",
  },
};

// 2. Single Selection Story
export const SingleSelect = {
  args: {
    options: frameworks,
    multiple: false,
    searchable: true,
    showFooter: true,
  },
};

// 3. No Search Story
export const NoSearch = {
  args: {
    options: frameworks,
    searchable: false,
  },
};

// 4. Portal & Z-Index Test Story
export const PortalView = {
  args: {
    options: frameworks,
    usePortal: false, // Tests createPortal logic
    multiple: true,
  },
};