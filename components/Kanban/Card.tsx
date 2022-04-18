import { ChatIcon, PaperClipIcon } from '@heroicons/react/outline';
import React from 'react';
import Avatar from './Avatar';
import Badge from './Badge';
import { sampleUserData } from '../../utils/sample-data';
import { Task, User } from '../../interfaces';

type Props = {
  isDragging?: boolean;
  task: Task;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  innerRef: any;
};

/* eslint-disable react/display-name */
const Card = React.forwardRef(
  ({ isDragging, task, ...rest }: Props, ref: any) => (
    <div
      ref={ref}
      className={`flex flex-col p-2 md:p-6 space-y-2 rounded-lg bg-white dark:bg-dark-700 shadow text-slate-600 dark:text-gray-300 transform
        ${isDragging ? 'rotate-[17deg]' : 'rotate-0'}`}
      /* eslint-disable react/jsx-props-no-spreading */
      {...rest}
    >
      <div className="w-full flex space-x-1 pb-2">
        {task.labels.map((label: any, index: number) => (
          /* eslint-disable react/no-array-index-key */
          <Badge key={`label-${index}`} colorType={label.type}>
            {label.content}
          </Badge>
        ))}
      </div>

      <div className="relative space-y-1">
        <div className="font-semibold leading-tight">{task.title}</div>
        <p className="text-xs text-slate-400 dark:text-gray-400">
          {task.description}
        </p>
      </div>

      <div className="flex items-center justify-between pt-4">
        <div className="flex -space-x-2">
          {sampleUserData.map((user: User) => (
            <Avatar
              key={user.id}
              name={user.name}
              image={user.avatar}
              size="sm"
            />
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <button
            type="button"
            className="bg-transparent text-slate-500 dark:text-gray-300 flex items-center justify-center space-x-1"
          >
            <ChatIcon className="inline-block w-4 h-4" />
            <span className="text-xs">{task.commentCount}</span>
          </button>

          <button
            type="button"
            className="bg-transparent text-slate-500 dark:text-gray-300 flex items-center justify-center space-x-1"
          >
            <PaperClipIcon className="inline-block w-4 h-4" />
            <span className="text-xs">{task.attachmentCounts}</span>
          </button>
        </div>
      </div>
    </div>
  ),
);

Card.defaultProps = {
  isDragging: false,
};

export default Card;
