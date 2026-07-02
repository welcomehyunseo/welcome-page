type Page = {
    thumbnail: string;
    category?: string;
    title: string;
    date: Date;
    mdFile: string;
};

export const PageMap: Page[] = [
    {
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrXTexq8vjeJtfZFUiK4Ar0fZIxIC88OqFK7OEWpTSSyfQOO7w6JitaOU&s=10',
        title: 'Hello, World!',
        date: new Date("2026-01-01"),
        mdFile: '/pages/hello.md',
    },
];
export type { Page }