import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Description from "./Description";
import Tooltip from "@/app/shared/Tooltip";
import { twMerge } from "tailwind-merge";
import { Card } from "./Card";

interface Props {
  title: string;
  subTitle: string;
  description?: string;
  liveSiteHref?: string;
  githubRepoHref: string;
  screenshot: string;
  className?: string;
  underMaintenance?: boolean;
}

export default function SecondaryProjectContainer({
  title,
  subTitle,
  description,
  liveSiteHref,
  githubRepoHref,
  screenshot,
  className,

  underMaintenance,
}: Props) {
  return (
    <section className={twMerge("relative", className)}>
      <article
        className="rounded-md gap-3 items-center py-5 pb-7 mx-10 lg:mx-5 lg:px-12 bg-cyan-600/10 h-full flex flex-col "
        style={{ boxShadow: "0px 0px 4px white" }}
      >
        {/* ----------------------- stats ---------------------------------------------------- */}
        {/*   <div className="absolute top-0 left-2">
          <Tooltip
            content={
              <div className="text-slate-700 text-sm p-3">
                Completion Date Of {title}
              </div>
            }
          >
            <div className="text-slate-200 text-xs p-3">{completionDate}</div>
          </Tooltip>
        </div>
       <section className="absolute top-0 right-2">
          <Tooltip
            content={
              <div className="text-slate-700 text-sm p-3">
                {title} Project Duration
              </div>
            }
          >
            <div className="text-slate-200 text-xs p-3">{timeSpan}</div>
          </Tooltip>
        </section> */}

        {/* ----------------------- title & subtitle ---------------------------------------------------- */}
        <div className="px-5">
          <h3 className=" text-xl font-semibold text-center pb-1">{title}</h3>
          <h4 className="text-accent-green whitespace-normal text-sm">
            {subTitle}
          </h4>
        </div>

        <div className="flex flex-col items-center gap-4 mb-auto mt-3">
          {/* ----------------------- image ---------------------------------------------------- */}
          <figure className="flex justify-center">
            <Image
              src={screenshot}
              alt={`${title} Screenshot`}
              width="300"
              height="170"
              className="block lg:ml-0 mx-auto border border-gray-300"
            />
          </figure>

          {/* ----------------------- description ---------------------------------------------------- */}
          <div className="text-left text-sm lg:text-md  tracking-wide px-5 lg:px-0">
            {description && <Description description={description} />}
          </div>
        </div>

        {/* ----------------------- links ---------------------------------------------------- */}
        <div className="flex gap-8 justify-center px-4 lg:px-12 pt-4 pb-3 rounded-sm">
          {liveSiteHref && (
            <a
              className="underline whitespace-nowrap xl:basis-1/3 rounded-sm text-sm font-medium py-1  hover:text-cyan-200 hover:border-accent-green"
              // style={{ boxShadow: "1px 1px 10px rgba(220, 222, 224, .8)" }}
              href={liveSiteHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                disabled={underMaintenance}
                className="tracking-wide custom-underline"
              >
                Live Site
              </button>
            </a>
          )}
          {/* <span>|</span> */}
          <a
            className="underline whitespace-nowrap lg:basis-1/3 rounded-sm text-sm font-medium  py-1  hover:text-cyan-200 hover:border-accent-green"
            // style={{ boxShadow: "1px 1px 10px rgba(220, 222, 224, .8)" }}
            href={githubRepoHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              disabled={underMaintenance}
              className="tracking-wide custom-underline"
            >
              GitHub Repo
            </button>
          </a>
        </div>

        {/* ----------------------- tech stack ---------------------------------------------------- */}
        {/*  <section className="flex items-center gap-10 -mb-5">

          <div className="text-left text-slate-200 text-sm py-4">
            <div className="tech-icons flex flex-wrap gap-3">
              {techStack.map((stack, index) => (
                <div key={index} className="flex items-center">
                  <Tooltip content={stack.name}>
                    <Image
                      src={stack.icon}
                      alt={`${title} tech-icon`}
                      width="30"
                      height="30"
                    />
                  </Tooltip>
                </div>
              ))}
            </div>
          </div>
        </section> */}
      </article>

      {/* Under maintenance overlay */}
      {underMaintenance && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-10">
          <p className="text-white">Currently down for maintenance</p>
        </div>
      )}
    </section>
  );
}
