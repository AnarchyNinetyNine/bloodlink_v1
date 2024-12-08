-- Enum for UserRole
CREATE TYPE "UserRole" AS ENUM ('DONOR', 'HOSPITAL', 'ADMIN');

-- Enum for Gender
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- Enum for BloodType
CREATE TYPE "BloodType" AS ENUM (
  'O_POS', 'O_NEG', 'A_POS', 'A_NEG', 
  'B_POS', 'B_NEG', 'AB_POS', 'AB_NEG'
);

-- Users Table
CREATE TABLE "users" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "email" VARCHAR(255) UNIQUE NOT NULL,
  "password" VARCHAR(255) NOT NULL,
  "role" "UserRole",
  "fullName" VARCHAR(255) NOT NULL,
  "phoneNumber" VARCHAR(20) UNIQUE NOT NULL,
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Donors Table
CREATE TABLE "donors" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "userId" UUID UNIQUE NOT NULL,
  "firstName" VARCHAR(255) NOT NULL,
  "lastName" VARCHAR(255) NOT NULL,
  "gender" "Gender",
  "bloodType" "BloodType",
  "address" TEXT,
  "location" JSONB,
  "lastDonationDate" TIMESTAMP,
  "availability" BOOLEAN,
  FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE
);

-- Hospitals Table
CREATE TABLE "hospitals" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "userId" UUID UNIQUE NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "location" JSONB,
  "cmd" VARCHAR(255) NOT NULL,
  "contactInfo" JSONB,
  FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE
);

-- Admins Table
CREATE TABLE "admins" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "userId" UUID UNIQUE NOT NULL,
  "firstName" VARCHAR(255) NOT NULL,
  "lastName" VARCHAR(255) NOT NULL,
  FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE
);

-- Blood Donations Table
CREATE TABLE "blood_donations" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "donorId" UUID NOT NULL,
  "requestId" UUID NOT NULL,
  "donatedQuantity" INT NOT NULL,
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY ("donorId") REFERENCES "donors"("id") ON DELETE CASCADE,
  FOREIGN KEY ("requestId") REFERENCES "blood_requests"("id") ON DELETE CASCADE
);

-- Blood Requests Table
CREATE TABLE "blood_requests" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "requesterId" UUID NOT NULL,
  "bloodType" "BloodType" NOT NULL,
  "quantity" INT NOT NULL,
  "urgency" BOOLEAN NOT NULL,
  "status" VARCHAR(255) NOT NULL,
  "timeFrame" TIMESTAMP NOT NULL,
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY ("requesterId") REFERENCES "hospitals"("id") ON DELETE CASCADE
);

-- Blood Request Confirmations Table
CREATE TABLE "blood_request_confirmations" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "donorId" UUID NOT NULL,
  "bloodRequestId" UUID NOT NULL,
  "confirmedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY ("donorId") REFERENCES "donors"("id") ON DELETE CASCADE,
  FOREIGN KEY ("bloodRequestId") REFERENCES "blood_requests"("id") ON DELETE CASCADE,
  CONSTRAINT "unique_donor_request" UNIQUE ("donorId", "bloodRequestId")
);
