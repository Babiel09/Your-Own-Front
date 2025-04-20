"use client"

import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { BsJournalPlus, BsLock, BsGlobe } from 'react-icons/bs';
import { FiCalendar } from 'react-icons/fi';

export default function DiaryComponent(){
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const handleSaveDiary = () => {
    console.log('Salvando diário:', { title, date, content, isPrivate });
  };

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Handlee" rel="stylesheet" />
      </Head>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
        <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Novo Diário</h1>
            <Link
              href="/me"
              className="text-violet-600 hover:text-violet-700 text-sm font-medium"
            >
              Voltar ao Perfil
            </Link>
          </div>

          {/* Diary Form */}
          <div
            className="relative w-full bg-white rounded-xl shadow-md overflow-hidden"
            id="diary-paper"
          >
            {/* Margin Effect */}
            <div className="absolute top-0 bottom-0 left-0 w-[60px] bg-[radial-gradient(#575450_6px,transparent_7px)] bg-[size:30px_30px] border-r-4 border-[#D44147]" />

            {/* Content Area */}
            <div className="ml-[60px] p-6 bg-[linear-gradient(to_bottom,transparent_0%,transparent_28px,#91D1D3_28px)] bg-[size:30px_30px]">
              {/* Title and Date */}
              <div className="mb-6">
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Título do Diário"
                  className="w-full bg-transparent text-2xl font-bold text-gray-900 font-handlee focus:outline-none placeholder-gray-400"
                />
                <div className="flex items-center mt-2 text-gray-500">
                  <FiCalendar className="h-4 w-4 mr-2" />
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="bg-transparent text-sm font-handlee focus:outline-none"
                  />
                </div>
              </div>

              {/* Textarea */}
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Escreva seu diário aqui..."
                className="w-full h-[300px] bg-transparent text-black font-handlee text-lg leading-[30px] focus:outline-none resize-none"
              />

              {/* Privacy and Save */}
              <div className="mt-6 flex justify-between items-center">
                <button
                  onClick={() => setIsPrivate(!isPrivate)}
                  className="flex items-center text-sm font-medium text-gray-600 hover:text-violet-600"
                >
                  {isPrivate ? (
                    <>
                      <BsLock className="h-4 w-4 mr-1" />
                      Privado
                    </>
                  ) : (
                    <>
                      <BsGlobe className="h-4 w-4 mr-1" />
                      Público
                    </>
                  )}
                </button>
                <button
                  onClick={handleSaveDiary}
                  className="flex items-center px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-md text-sm font-medium shadow-md hover:shadow-lg transition duration-300"
                >
                  <BsJournalPlus className="h-4 w-4 mr-2" />
                  Salvar Diário
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          .font-handlee {
            font-family: 'Handlee', cursive;
          }
        `}
      </style>
    </>
  );
};