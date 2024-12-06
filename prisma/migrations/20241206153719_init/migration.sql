-- CreateTable
CREATE TABLE "Terrain" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "shape" JSONB NOT NULL,

    CONSTRAINT "Terrain_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "coordenates" JSONB NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);
