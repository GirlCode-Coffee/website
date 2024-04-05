// This file was generated by the storyblok CLI.
// DO NOT MODIFY THIS FILE BY HAND.
import type { ISbStoryData } from "storyblok";
export type MultilinkStoryblok =
  | {
      id?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "story";
      target?: "_self" | "_blank";
      story?: {
        name: string;
        created_at?: string;
        published_at?: string;
        id: number;
        uuid: string;
        content?: {
          [k: string]: any;
        };
        slug: string;
        full_slug: string;
        sort_by_date?: null | string;
        position?: number;
        tag_list?: string[];
        is_startpage?: boolean;
        parent_id?: null | number;
        meta_data?: null | {
          [k: string]: any;
        };
        group_id?: string;
        first_published_at?: string;
        release_id?: null | number;
        lang?: string;
        path?: null | string;
        alternates?: any[];
        default_full_slug?: null | string;
        translated_slugs?: null | any[];
        [k: string]: any;
      };
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "asset" | "url";
      target?: "_self" | "_blank";
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: "email";
      target?: "_self" | "_blank";
      [k: string]: any;
    };

export interface ButtonStoryblok {
  background_color?: "" | "primary-yellow" | "primary-red";
  text_color?: "" | "light" | "dark";
  size?: "" | "small" | "medium" | "large";
  button_label?: string;
  link?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  border_radius?: "" | "default" | "small";
  component: "button";
  _uid: string;
  [k: string]: any;
}

export interface AssetStoryblok {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  focus?: string;
  [k: string]: any;
}

export interface HeroStoryblok {
  image_alba?: AssetStoryblok;
  image_arisa?: AssetStoryblok;
  image_josefine?: AssetStoryblok;
  background_color?: "" | "white" | "primary-red-lightest" | "primary-yellow-lightest";
  headline?: string;
  description?: string;
  button?: ButtonStoryblok[];
  component: "hero";
  _uid: string;
  [k: string]: any;
}

export interface PageStoryblok {
  body?: (ButtonStoryblok | HeroStoryblok | PageStoryblok | ProfileStoryblok)[];
  component: "page";
  _uid: string;
  [k: string]: any;
}

export interface ProfileStoryblok {
  background_color?: "" | "white" | "primary-red-lightest";
  name?: string;
  reverse_layout?: boolean;
  headshot?: AssetStoryblok;
  x_user_name?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  component: "profile";
  _uid: string;
  [k: string]: any;
}
