'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { BsJournalPlus, BsThreeDots, BsBookmark, BsGrid3X3 } from 'react-icons/bs';
import { FiUser, FiUsers, FiSettings, FiCalendar, FiHeart, FiMessageCircle, FiShare2 } from 'react-icons/fi';
import { HiLockClosed } from 'react-icons/hi';

export default function Me(){
    const [activeTab, setActiveTab] = useState('posts');
  const [isFollowing, setIsFollowing] = useState(false);

  const user = {
    name: 'Joana Silva',
    username: 'joanasilva',
    bio: 'Fotógrafa | Viajante | Contadora de histórias ✨',
    profileImage: '/api/placeholder/150/150',
    followers: 1342,
    following: 456,
    posts: 78
  };

  const diaries = [
    {
      id: 1,
      title: 'Viagem para Paris',
      date: '18 de Abril, 2025',
      content: 'Finalmente conheci a Torre Eiffel hoje! A vista do topo é simplesmente incrível...',
      image: '/api/placeholder/400/300',
      likes: 85,
      comments: 12,
      isPrivate: false
    },
    {
      id: 2,
      title: 'Refletindo sobre a vida',
      date: '15 de Abril, 2025',
      content: 'Às vezes precisamos parar e pensar sobre nossas escolhas...',
      image: '/api/placeholder/400/300',
      likes: 47,
      comments: 8,
      isPrivate: true
    },
    {
      id: 3,
      title: 'Novo livro em progresso',
      date: '10 de Abril, 2025',
      content: 'Comecei a escrever um novo livro hoje! Estou muito animada com este projeto...',
      image: '/api/placeholder/400/300',
      likes: 102,
      comments: 24,
      isPrivate: false
    },
    {
      id: 4,
      title: 'Café da manhã especial',
      date: '5 de Abril, 2025',
      content: 'Hoje preparei um café da manhã especial com frutas frescas e pão caseiro...',
      image: '/api/placeholder/400/300',
      likes: 63,
      comments: 9,
      isPrivate: false
    },
    {
      id: 5,
      title: 'Novo projeto fotográfico',
      date: '1 de Abril, 2025',
      content: 'Estou começando um novo projeto fotográfico com foco na natureza urbana...',
      image: '/api/placeholder/400/300',
      likes: 79,
      comments: 15,
      isPrivate: false
    },
    {
      id: 6,
      title: 'Pensamentos pessoais',
      date: '28 de Março, 2025',
      content: 'Algumas reflexões sobre os últimos acontecimentos na minha vida...',
      image: '/api/placeholder/400/300',
      likes: 0,
      comments: 0,
      isPrivate: true
    }
  ];

  const handleNewDiary = () => {
    console.log('Navigate to create new diary page');
  };

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Profile Section */}
      <section className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-10">
              <div className="h-24 w-24 sm:h-32 sm:w-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image 
                  src={user.profileImage} 
                  alt={user.name} 
                  width={150} 
                  height={150} 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center md:mb-4">
                <h1 className="text-2xl font-bold text-gray-900 mb-2 md:mb-0 md:mr-6">{user.username}</h1>
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 mb-4 md:mb-0">
                  <button 
                    onClick={handleFollow}
                    className={`px-4 py-1.5 rounded-md text-sm font-medium ${
                      isFollowing 
                        ? 'bg-gray-100 text-gray-800 hover:bg-gray-200' 
                        : 'bg-violet-600 text-white hover:bg-violet-700'
                    }`}
                  >
                    {isFollowing ? 'Seguindo' : 'Seguir'}
                  </button>
                  <button className="px-4 py-1.5 bg-gray-100 rounded-md text-sm font-medium text-gray-800 hover:bg-gray-200">
                    Mensagem
                  </button>
                </div>
                <button className="hidden md:block md:ml-2">
                  <BsThreeDots className="h-5 w-5 text-gray-600" />
                </button>
              </div>
              
              <div className="flex justify-center md:justify-start space-x-8 mb-4">
                <div className="text-center md:text-left">
                  <span className="font-bold text-gray-900">{user.posts}</span>
                  <span className="text-sm text-gray-500 ml-1">diários</span>
                </div>
                <div className="text-center md:text-left">
                  <span className="font-bold text-gray-900">{user.followers}</span>
                  <span className="text-sm text-gray-500 ml-1">seguidores</span>
                </div>
                <div className="text-center md:text-left">
                  <span className="font-bold text-gray-900">{user.following}</span>
                  <span className="text-sm text-gray-500 ml-1">seguindo</span>
                </div>
              </div>
              
              <div>
                <h2 className="text-base font-semibold text-gray-900">{user.name}</h2>
                <p className="text-sm text-gray-600 mt-1">{user.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tabs */}
      <section className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center md:justify-start">
            <button 
              className={`py-3 px-4 border-b-2 ${activeTab === 'posts' ? 'border-violet-600 text-violet-600' : 'border-transparent text-gray-500'} font-medium flex items-center`}
              onClick={() => setActiveTab('posts')}
            >
              <BsGrid3X3 className="h-4 w-4 mr-2" />
              <span>Diários</span>
            </button>
            <button 
              className={`py-3 px-4 border-b-2 ${activeTab === 'saved' ? 'border-violet-600 text-violet-600' : 'border-transparent text-gray-500'} font-medium flex items-center`}
              onClick={() => setActiveTab('saved')}
            >
              <BsBookmark className="h-4 w-4 mr-2" />
              <span>Salvos</span>
            </button>
            <button 
              className={`py-3 px-4 border-b-2 ${activeTab === 'private' ? 'border-violet-600 text-violet-600' : 'border-transparent text-gray-500'} font-medium flex items-center`}
              onClick={() => setActiveTab('private')}
            >
              <HiLockClosed className="h-4 w-4 mr-2" />
              <span>Privados</span>
            </button>
          </div>
        </div>
      </section>
      
      {/* Diaries Grid */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'posts' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {diaries.filter(diary => !diary.isPrivate).map(diary => (
                  <div key={diary.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                    <div className="relative">
                      <Image 
                        src={diary.image} 
                        alt={diary.title} 
                        width={400} 
                        height={300} 
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 truncate">{diary.title}</h3>
                        <div className="flex items-center text-xs text-gray-500">
                          <FiCalendar className="h-3 w-3 mr-1" />
                          {diary.date}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm line-clamp-3">{diary.content}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center text-gray-500 hover:text-red-500 cursor-pointer">
                            <FiHeart className="h-5 w-5 mr-1" />
                            <span className="text-xs">{diary.likes}</span>
                          </div>
                          <div className="flex items-center text-gray-500 hover:text-violet-500 cursor-pointer">
                            <FiMessageCircle className="h-5 w-5 mr-1" />
                            <span className="text-xs">{diary.comments}</span>
                          </div>
                          <div className="flex items-center text-gray-500 hover:text-blue-500 cursor-pointer">
                            <FiShare2 className="h-5 w-5" />
                          </div>
                        </div>
                        <Link href={`/diary/${diary.id}`} className="text-xs font-medium text-violet-600 hover:text-violet-700">
                          Ler mais
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* New diary button (fixed at bottom) */}
              <div className="fixed bottom-6 right-6 z-10">
                <button 
                  onClick={handleNewDiary}
                  className="h-14 w-14 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg hover:shadow-xl flex items-center justify-center transition duration-300 transform hover:scale-105"
                >
                  <BsJournalPlus className="h-6 w-6" />
                </button>
              </div>
            </>
          )}
          
          {activeTab === 'private' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {diaries.filter(diary => diary.isPrivate).map(diary => (
                  <div key={diary.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                    <div className="relative">
                      <Image 
                        src={diary.image} 
                        alt={diary.title} 
                        width={400} 
                        height={300} 
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-gray-900 bg-opacity-70 text-white p-1 rounded-md">
                        <HiLockClosed className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 truncate">{diary.title}</h3>
                        <div className="flex items-center text-xs text-gray-500">
                          <FiCalendar className="h-3 w-3 mr-1" />
                          {diary.date}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm line-clamp-3">{diary.content}</p>
                      <div className="mt-4 flex justify-end">
                        <Link href={`/diary/${diary.id}`} className="text-xs font-medium text-violet-600 hover:text-violet-700">
                          Ler mais
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* New diary button (fixed at bottom) */}
              <div className="fixed bottom-6 right-6 z-10">
                <button 
                  onClick={handleNewDiary}
                  className="h-14 w-14 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg hover:shadow-xl flex items-center justify-center transition duration-300 transform hover:scale-105"
                >
                  <BsJournalPlus className="h-6 w-6" />
                </button>
              </div>
            </>
          )}
          
          {activeTab === 'saved' && (
            <div className="text-center py-12">
              <div className="mx-auto w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <BsBookmark className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-medium text-gray-900">Nenhum diário salvo</h3>
              <p className="mt-2 text-gray-600">
                Quando você salvar diários de outras pessoas, eles aparecerão aqui.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* Suggested Followers */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Sugestões para você</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition duration-300">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                    {String.fromCharCode(64 + item)}
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-gray-900">Usuário {item}</h3>
                    <p className="text-xs text-gray-500">Escritor e fotógrafo</p>
                  </div>
                </div>
                <button className="w-full py-1.5 rounded-md text-sm font-medium bg-violet-600 text-white hover:bg-violet-700">
                  Seguir
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};