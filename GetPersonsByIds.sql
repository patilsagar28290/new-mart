-- =============================================
-- Author:      System Generated
-- Create date: 2024
-- Description: Returns Person data for specified PersonIds with nested Address objects as JSON
-- =============================================

CREATE PROCEDURE [dbo].[GetPersonWithAddresses]
    @PersonIds NVARCHAR(MAX) = NULL  -- Comma-separated list of PersonIds (e.g., 'P001,P002,P003,P004,P005,P006,P007,P008,P009,P010')
AS
BEGIN
    SET NOCOUNT ON;

    -- Validate input parameters
    IF @PersonIds IS NOT NULL AND LEN(@PersonIds) = 0
    BEGIN
        RAISERROR('PersonIds cannot be empty string', 16, 1);
        RETURN;
    END

    -- Split the comma-separated PersonIds and return data for those persons
    ;WITH PersonIdList AS (
        SELECT
            TRIM(value) AS PersonId
        FROM STRING_SPLIT(@PersonIds, ',')
        WHERE LEN(TRIM(value)) > 0
    )
    SELECT
        p.id,
        CONCAT(ISNULL(p.title, ''), ' ', p.name) AS name,
        (
            SELECT
                a.house AS House,
                a.zip AS Zip,
                a.pin AS Pin
            FROM Address a
            WHERE a.person_id = p.id
            FOR JSON PATH
        ) AS Address
    FROM Person p
    INNER JOIN PersonIdList pil ON p.id = pil.PersonId
    ORDER BY p.id
    FOR JSON PATH, ROOT('persons');

END
GO

-- =============================================
-- Alternative version with Table-Valued Parameter (More Efficient)
-- =============================================

-- First, create a user-defined table type for PersonIds
CREATE TYPE [dbo].[PersonIdTableType] AS TABLE (
    PersonId NVARCHAR(50) PRIMARY KEY
);
GO

CREATE PROCEDURE [dbo].[GetPersonsByIds]
    @PersonIds PersonIdTableType READONLY
AS
BEGIN
    SET NOCOUNT ON;

    -- Validate input
    IF NOT EXISTS (SELECT 1 FROM @PersonIds)
    BEGIN
        RAISERROR('At least one PersonId must be provided', 16, 1);
        RETURN;
    END

    -- Return data for specified persons
    SELECT
        p.id,
        CONCAT(ISNULL(p.title, ''), ' ', p.name) AS name,
        (
            SELECT
                a.house AS House,
                a.zip AS Zip,
                a.pin AS Pin
            FROM Address a
            WHERE a.person_id = p.id
            FOR JSON PATH
        ) AS Address
    FROM Person p
    INNER JOIN @PersonIds pit ON p.id = pit.PersonId
    ORDER BY p.id
    FOR JSON PATH, ROOT('persons');

END
GO

-- =============================================
-- Usage Examples:
-- =============================================

/*
-- Get data for 10 specific persons using comma-separated string
EXEC [dbo].[GetPersonWithAddresses] @PersonIds = 'P001,P002,P003,P004,P005,P006,P007,P008,P009,P010'

-- Get top 10 persons (when no PersonIds provided)
EXEC [dbo].[GetPersonWithAddresses]

-- Using Table-Valued Parameter (more efficient for large datasets)
DECLARE @PersonIdTable PersonIdTableType
INSERT INTO @PersonIdTable VALUES ('P001'), ('P002'), ('P003'), ('P004'), ('P005'),
                                  ('P006'), ('P007'), ('P008'), ('P009'), ('P010')
EXEC [dbo].[GetPersonsByIds] @PersonIds = @PersonIdTable
*/

-- =============================================
-- Sample Output Format (10 objects):
-- =============================================

/*
{
  "persons": [
    {
      "id": "P001",
      "name": "Mr John Doe",
      "Address": [
        {"House": "123 Main St", "Zip": "12345", "Pin": "123456"}
      ]
    },
    {
      "id": "P002",
      "name": "Dr Jane Smith",
      "Address": [
        {"House": "456 Oak Ave", "Zip": "67890", "Pin": "789012"}
      ]
    },
    // ... exactly 8 more person objects for the 10 specified PersonIds
  ]
}
*/