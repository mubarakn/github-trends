export interface Repo {
    repoLink: string;
    repoName: string;
    description: string;
    username: string;
    forkCount: string;
    language: string;
    starCount: string;
    todayStarCount: string;
    sponsor?: boolean;
    users: [{
        imgSrc: string;
        profileUrl: string;
    }]
}

export interface ListHeaderProps {
    showSpokenLanguage?: boolean;
    spokenLanguage?: string;
    language?: string;
    dateRange?: string,
    onDateRangeSelect: (range: string) => void
}

export interface DateRangeProps {
    dateRange: string | undefined;
    onDateRangeSelect: (range:string) => void;
}

interface Developer {
    slNo: string;
    dateRange: string;
    fullName: string;
    imgSrc: string;
    profileLink: string;
    repoDescription: string;
    repoName: string;
    repoUrl: string;
    sponsorLink: string;
    username: string;
}

export enum LinkButtonLocation {
    LEFT,
    RIGHT
}

export const dateRanges = [
    { value: 'daily', label: 'Today' },
    { value: 'weekly', label: 'This week' },
    { value: 'monthly', label: 'This month' }
]